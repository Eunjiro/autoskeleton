// import { AvatarSkeleton } from "./components/AvatarSkeleton";
// import { ButtonSkeleton } from "./components/ButtonSkeleton";
// import { ImageSkeleton } from "./components/ImageSkeleton";
// import { Skeleton } from "./components/Skeleton/Skeleton";
// import { SkeletonGroup } from "./components/SkeletonGroup";
// import { TextSkeleton } from "./components/TextSkeleton/TextSkeleton";
import { CardSkeleton } from "./components/CardSkeleton";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 16, width: 400 }}>
        <CardSkeleton
          direction="row"
          imageWidth={180}
          gap={16}
          />
      </div>

      <hr></hr>
    
      <div style={{ marginBottom: 16, width: 400 }}>
        <CardSkeleton
          lines={5}
          lastLineWidth="100%"
          gap={16}
        />
      </div>

      <hr></hr>

      <div style={{ marginBottom: 16, width: 400 }}>
      <CardSkeleton
        showImage={false}
        showAvatar
        gap={16}
      /> 
      </div>

      <hr></hr>

      <div style={{ marginBottom: 16, width: 400 }}>
      <CardSkeleton
        showAvatar={false}
        gap={16}
        
      />
      </div>

      <hr></hr>

      <div style={{ marginBottom: 16, width: 400 }}>
        <CardSkeleton 
          gap={16}
        />
      </div>


        {/* <SkeletonGroup animation="pulse" gap={100}>

          <AvatarSkeleton size={60} animation="pulse" />

          <Skeleton width={200} height={50} />

          <TextSkeleton lines={5} lastLineWidth={700} height={50} />
        
          <ImageSkeleton
            aspectRatio="16/9"
          />

          <ButtonSkeleton animation="pulse" />
        </SkeletonGroup> */}
      


      {/* <div style={{ width: 400 }}>
        <Skeleton variant="circle" />

        <Skeleton variant="rounded" width={250} height={40} />

        <Skeleton variant="default" width={250} height={40} />

        <Skeleton width="100%" height={40} animation="wave" />

        <br />

        <Skeleton width="100%" height={40} animation="pulse" />

        <br />

        <Skeleton width="100%" height={40} animation="fade" />
      </div>

      <br />

      <div style={{ width: 400 }}>
        <TextSkeleton />

        <br />

        <TextSkeleton lines={5} gap={12} lastLineWidth="40%" />
      </div> */}
    </div>
  );
}

export default App;
