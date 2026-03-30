import { Composition } from 'remotion';
import { Main } from './Main';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={4800} // 160s total
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
