import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div 
      style={{ height: '90dvh', width: '100vw' }}
    >
      <iframe
        allowFullScreen
        src='https://dad4b4e9f536.ngrok-free.app/ul-self-service-fe/poc/snap-page'
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default ExploreContainer;
