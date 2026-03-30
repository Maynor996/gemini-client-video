import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile } from 'remotion';

export const SceneCTA: React.FC = () => {
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
        立即下载体验
      </div>
      
      <div style={{
        padding: '60px',
        backgroundColor: '#e8f0fe',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        opacity: interpolate(frame, [30, 60], [0, 1]),
        border: '4px solid #4285f4',
        width: '900px'
      }}>
        <div style={{ fontSize: '120px', color: '#1a73e8', fontWeight: 'bold' }}>geminiai.asia</div>
        <div style={{ fontSize: '60px', color: '#5f6368' }}>点击“下载客户端”</div>
      </div>

      <div style={{
        marginTop: '100px',
        fontSize: '70px',
        color: '#1a1a1a',
        textAlign: 'center',
        opacity: interpolate(frame, [60, 90], [0, 1])
      }}>
        公众号回复 <br/>
        <span style={{ color: '#4285f4', fontWeight: 'bold', fontSize: '100px' }}>“客户端”</span> <br/>
        获取下载链接
      </div>

      <div style={{
        marginTop: '100px',
        opacity: interpolate(frame, [90, 120], [0, 1])
      }}>
        <img 
          src={staticFile('assets/downloads.png')} 
          style={{ width: '800px', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </AbsoluteFill>
  );
};
