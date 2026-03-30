import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const SceneUltra: React.FC = () => {
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
        独家 <br/>Gemini Ultra 车队
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
          <div style={{ fontSize: '70px', color: '#5f6368' }}>上下文长度:</div>
          <div style={{ fontSize: '120px', color: '#1a1a1a', fontWeight: 'bold' }}>128K 超长内容</div>
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
          <div style={{ fontSize: '70px', color: '#1a73e8' }}>对话次数:</div>
          <div style={{ fontSize: '120px', color: '#1a73e8', fontWeight: 'bold' }}>50 → 200 次/日</div>
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
          <div style={{ fontSize: '70px', color: '#1a1a1a' }}>高峰不排队，响应更流畅</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
