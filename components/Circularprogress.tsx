import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  progress: number;   // 0 to 1
  size?: number;
  strokeWidth?: number;
  color: string;
  backgroundColor?: string;
}

export function CircularProgress({
  progress,
  size = 28,
  strokeWidth = 2.5,
  color,
  backgroundColor,
}: CircularProgressProps) {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // We'll use a simple non-animated SVG approach since AnimatedSvg needs extra setup.
  // The progress prop updates fast enough from the download callback.
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        {/* Background track */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={backgroundColor || 'rgba(0,0,0,0.1)'}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          // Start from top (rotate -90 deg)
          transform={`rotate(-90, ${center}, ${center})`}
        />
      </Svg>
    </View>
  );
}