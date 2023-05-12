import { DefaultLayout } from '../Templates/DefaultLayout';

export function HomePage () {
  return (
    <DefaultLayout>      
      <div className="row">
        <div className="col">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Gc9tr0ASDf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </DefaultLayout>
  );
};
