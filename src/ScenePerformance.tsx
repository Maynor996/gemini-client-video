import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const ScenePerformance: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ 
      backgroundColor: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{
        fontSize: '150px',
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: '100px',
        opacity: interpolate(frame, [0, 30], [0, 1])
      }}>
        原生应用，速度飞快
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        width: '100%'
      }}>
        <div style={{
          padding: '60px',
          backgroundColor: '#f1f3f4',
          borderRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          opacity: interpolate(frame, [30, 60], [0, 1])
        }}>
          <div style={{ fontSize: '70px', color: '#5f6368' }}>复杂指令:</div>
          <div style={{ fontSize: '100px', color: '#1a1a1a', fontWeight: 'bold' }}>响应速度提升 200%</div>
        </div>
        
        <div style={{
          padding: '60px',
          backgroundColor: '#e8f0fe',
          borderRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          opacity: interpolate(frame, [60, 90], [0, 1]),
          border: '4px solid #4285f4'
        }}>
          <div style={{ fontSize: '70px', color: '#1a73e8' }}>超大文件:</div>
          <div style={{ fontSize: '100px', color: '#1a73e8', fontWeight: 'bold' }}>流畅度完全不在一个量级</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
