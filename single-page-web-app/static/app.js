"strict mode";

{ 
  const config = {
    startRoute: '#start',
    route: ['#start', '#best-practices']
  };
  
  const app = {
    init: () => {
      routes.init();
    }
  };

  const routes = {
    init: () => {
      // If you open up the page on a not existing route the SPA will show no sections. Do something like this:
      if (hashLocation && (config.routes).includes(hashLocation)) {
        sections.toggle(hashLocation);
      } else {
        sections.toggle(config.startRoute);
      }
     
      window.onhashchange = () => {
        // What if the users goes to hash not in your routes by accident? Check if the route exists:
        const hashLocation = document.location.hash;
        if ((config.routes).includes(hashLocation)) {
          sections.toggle(hashLocation);
        }
      };
    }
  };

  const sections = {
    toggle: route => {
      const sectionsList = document.querySelectorAll("section");

      sectionsList.forEach(section => {
        if(route === `#${section.id}`) {
          section.classList.add("active");
          document.querySelector(`a[href='#${section.id}']`).classList.add("active");
        } else {
          section.classList.remove("active");
          document.querySelector(`a[href='#${section.id}']`).classList.remove("active");
        }
      });
    };
  }

  app.init();
}
