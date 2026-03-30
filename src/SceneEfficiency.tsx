import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const SceneEfficiency: React.FC = () => {
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
        fontSize: '120px',
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: '100px',
        opacity: interpolate(frame, [0, 30], [0, 1])
      }}>
        网页版 vs 客户端
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
          <div style={{ fontSize: '50px', color: '#5f6368' }}>网页版:</div>
          <div style={{ fontSize: '70px', color: '#d93025' }}>打开浏览器 → 输入网址 → 等待加载 → 加载缓慢</div>
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
          <div style={{ fontSize: '50px', color: '#1a73e8' }}>客户端:</div>
          <div style={{ fontSize: '100px', color: '#1a73e8', fontWeight: 'bold' }}>双击运行，随开随用！</div>
          <div style={{ fontSize: '60px', color: '#1a73e8' }}>原生应用，响应飞快</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
