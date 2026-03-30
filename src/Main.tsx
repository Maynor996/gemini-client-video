import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile } from 'remotion';
import { SceneIntro } from './SceneIntro';
import { SceneEfficiency } from './SceneEfficiency';
import { ScenePerformance } from './ScenePerformance';
import { SceneUltra } from './SceneUltra';
import { SceneFeatures } from './SceneFeatures';
import { SceneCTA } from './SceneCTA';

export const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Audio durations based on file sizes (~16KB/s)
  const introDuration = 22 * fps;
  const efficiencyDuration = 31 * fps;
  const performanceDuration = 15 * fps;
  const ultraDuration = 41 * fps;
  const featuresDuration = 32 * fps;
  const ctaDuration = 25 * fps;
  
  const transitionFrames = 30; // 1s

  // Start times
  const introStart = 0;
  const efficiencyStart = introStart + introDuration;
  const performanceStart = efficiencyStart + efficiencyDuration;
  const ultraStart = performanceStart + performanceDuration;
  const featuresStart = ultraStart + ultraDuration;
  const ctaStart = featuresStart + featuresDuration;

  const getOpacity = (start: number, duration: number) => {
    return interpolate(
      frame,
      [start, start + transitionFrames, start + duration - transitionFrames, start + duration],
      [0, 1, 1, 0],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
  };

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF' }}>
      <Sequence from={introStart} durationInFrames={introDuration}>
        <div style={{ opacity: getOpacity(introStart, introDuration), width: '100%', height: '100%' }}>
          <SceneIntro />
          <Audio src={staticFile('audio/scene1.mp3')} />
        </div>
      </Sequence>
      
      <Sequence from={efficiencyStart} durationInFrames={efficiencyDuration}>
        <div style={{ opacity: getOpacity(efficiencyStart, efficiencyDuration), width: '100%', height: '100%' }}>
          <SceneEfficiency />
          <Audio src={staticFile('audio/scene2.mp3')} />
        </div>
      </Sequence>
      
      <Sequence from={performanceStart} durationInFrames={performanceDuration}>
        <div style={{ opacity: getOpacity(performanceStart, performanceDuration), width: '100%', height: '100%' }}>
          <ScenePerformance />
          <Audio src={staticFile('audio/scene3.mp3')} />
        </div>
      </Sequence>
      
      <Sequence from={ultraStart} durationInFrames={ultraDuration}>
        <div style={{ opacity: getOpacity(ultraStart, ultraDuration), width: '100%', height: '100%' }}>
          <SceneUltra />
          <Audio src={staticFile('audio/scene4.mp3')} />
        </div>
      </Sequence>

      <Sequence from={featuresStart} durationInFrames={featuresDuration}>
        <div style={{ opacity: getOpacity(featuresStart, featuresDuration), width: '100%', height: '100%' }}>
          <SceneFeatures />
          <Audio src={staticFile('audio/scene5.mp3')} />
        </div>
      </Sequence>
      
      <Sequence from={ctaStart} durationInFrames={ctaDuration}>
        <div style={{ opacity: interpolate(frame, [ctaStart, ctaStart + transitionFrames], [0, 1], { extrapolateLeft: 'clamp' }), width: '100%', height: '100%' }}>
          <SceneCTA />
          <Audio src={staticFile('audio/scene6.mp3')} />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
