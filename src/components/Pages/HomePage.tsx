import { ImageHero } from '../Molecules/ImageHero';
import { DefaultLayout } from '../Templates/DefaultLayout';
import image from "../../assets/example-hero2.jpg";

export function HomePage () {
  return (
    <DefaultLayout>
      <ImageHero
        imageUrl={image}
        title="Integer accumsan efficitur"
        subtitle="Lorem ipsum pellentesque gravida augue, consectetur adipiscing elit."
      />
      <div className="row">
        <div className="col">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Gc9tr0ASDf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="col">
          <h3>Nunc dictum sapien a massa condimentum faucibus.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin arcu quis pretium auctor. Nulla facilisi. Donec tellus nibh, posuere sit amet congue ac, maximus eget sem. Fusce condimentum non eros sed malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt id ipsum et tincidunt. Etiam varius sed felis non aliquet. Suspendisse potenti. Vestibulum quis eros in mauris cursus varius.
            <br/>
            Duis in turpis sem. Nunc ac sapien vestibulum, malesuada orci in, gravida dolor. Nam molestie, tellus non fermentum rhoncus, mauris est condimentum nisl, sed vehicula enim magna sed odio. Maecenas finibus orci vitae dictum pharetra. Praesent risus ex, elementum at libero ac, suscipit luctus sem. Nulla facilisi. Vestibulum in gravida odio, at suscipit neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer aliquet lectus ut ipsum bibendum ultrices. Nulla at ullamcorper tellus. Pellentesque nec luctus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut neque quis sapien porta faucibus. Etiam lobortis maximus ante, vel interdum sem efficitur quis.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Nunc dictum sapien a massa condimentum faucibus.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin arcu quis pretium auctor. Nulla facilisi. Donec tellus nibh, posuere sit amet congue ac, maximus eget sem. Fusce condimentum non eros sed malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt id ipsum et tincidunt. Etiam varius sed felis non aliquet. Suspendisse potenti. Vestibulum quis eros in mauris cursus varius.
            <br/>
            Duis in turpis sem. Nunc ac sapien vestibulum, malesuada orci in, gravida dolor. Nam molestie, tellus non fermentum rhoncus, mauris est condimentum nisl, sed vehicula enim magna sed odio. Maecenas finibus orci vitae dictum pharetra. Praesent risus ex, elementum at libero ac, suscipit luctus sem. Nulla facilisi. Vestibulum in gravida odio, at suscipit neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer aliquet lectus ut ipsum bibendum ultrices. Nulla at ullamcorper tellus. Pellentesque nec luctus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut neque quis sapien porta faucibus. Etiam lobortis maximus ante, vel interdum sem efficitur quis.
          </p>
        </div>
        <div className="col">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Gc9tr0ASDf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </DefaultLayout>
  );
};
