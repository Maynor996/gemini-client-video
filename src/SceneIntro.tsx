import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile } from 'remotion';

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const moveIn = spring({
    frame,
    fps,
    config: { stiffness: 100 },
  });

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
        transform: `scale(${moveIn})`,
        marginBottom: '100px'
      }}>
        <img 
          src={staticFile('assets/homepage.png')} 
          style={{ width: '800px', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} 
        />
      </div>
      
      <div style={{
        fontSize: '100px',
        fontWeight: 'bold',
        color: '#1a1a1a',
        textAlign: 'center',
        opacity: interpolate(frame, [30, 60], [0, 1])
      }}>
        Gemini <br/>全平台客户端<br/>
        <span style={{ color: '#4285f4' }}>正式上线</span>
      </div>
      
      <div style={{
        marginTop: '60px',
        display: 'flex',
        gap: '40px',
        opacity: interpolate(frame, [60, 90], [0, 1])
      }}>
        {['iOS', 'Android', 'Windows', 'Mac', 'Linux'].map((os) => (
          <div key={os} style={{
            padding: '20px 40px',
            backgroundColor: '#f1f3f4',
            borderRadius: '20px',
            fontSize: '40px',
            color: '#5f6368'
          }}>
            {os}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
