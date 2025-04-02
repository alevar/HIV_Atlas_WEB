import React from 'react';

interface AnnotationScoreIconProps {
  score: number;
  size?: number;
}

const AnnotationScoreIcon: React.FC<AnnotationScoreIconProps> = ({ score, size = 24 }) => {
  // Determine grade and color based on score
  const getGradeInfo = (score: number): { grade: string; color: string } => {
    if (score >= 95) return { grade: 'A+', color: '#4CAF50' }; // Green
    if (score >= 90) return { grade: 'A', color: '#8BC34A' };
    if (score >= 85) return { grade: 'B+', color: '#CDDC39' };
    if (score >= 80) return { grade: 'B', color: '#FFEB3B' }; // Yellow
    if (score >= 75) return { grade: 'C+', color: '#FFC107' };
    if (score >= 70) return { grade: 'C', color: '#FF9800' }; // Orange
    if (score >= 60) return { grade: 'D', color: '#FF5722' };
    return { grade: 'F', color: '#F44336' }; // Red
  };

  const { grade, color } = getGradeInfo(score);
  
  // Calculate viewBox dimensions based on size
  const viewBoxSize = 100;
  const centerPoint = viewBoxSize / 2;
  const radius = viewBoxSize * 0.5;
  const fontSize = viewBoxSize * 0.55;

  return (
    <div 
      style={{ display: 'inline-block', width: size, height: size }}
      title={`Score: ${score.toFixed(2)} - Grade: ${grade}`}
    >
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size} height={size}>
        <circle
          cx={centerPoint}
          cy={centerPoint}
          r={radius}
          fill={color}
        />
        <text
          x={centerPoint}
          y={centerPoint + fontSize / 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fontWeight="bold"
          fill="white"
        >
          {grade}
        </text>
      </svg>
    </div>
  );
};

export default AnnotationScoreIcon;