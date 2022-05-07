import { Fragment } from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import { publishRoutes } from '~/routes'
import { DefaultLayout } from "~/components/Layouts";

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes >
           {publishRoutes.map((route, index) => {
              // const Layout = route.layout === null ? Fragment : DefaultLayout
              const Page = route.components;
              let Layout = DefaultLayout
              if(route.layout) {
                  Layout = route.layout
              }
              else if(route.layout === null ) {
                  Layout = Fragment
              }
             return (
             <Route 
                  key={index} 
                  path={ route.path } 
                  element={ 
                    <Layout>
                      <Page />
                    </Layout>
                  } 
             /> )
           })}
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
