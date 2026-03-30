import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const SceneFeatures: React.FC = () => {
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
        极速轻量，零成本学习
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
          <div style={{ fontSize: '70px', color: '#5f6368' }}>Windows:</div>
          <div style={{ fontSize: '100px', color: '#1a1a1a', fontWeight: 'bold' }}>不到 10MB</div>
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
          <div style={{ fontSize: '70px', color: '#1a73e8' }}>Mac:</div>
          <div style={{ fontSize: '100px', color: '#1a73e8', fontWeight: 'bold' }}>不到 8MB</div>
        </div>

        <div style={{
          padding: '60px',
          backgroundColor: '#f1f3f4',
          borderRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          opacity: interpolate(frame, [90, 120], [0, 1])
        }}>
          <div style={{ fontSize: '70px', color: '#1a1a1a' }}>1:1 还原官网，多模态全功能</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
