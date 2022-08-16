import "./App.css";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Profile from "../src/pages/Profile";
import NewBuild from "../src/pages/NewBuild";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// connection to /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer  ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // we use the ApolloClient() constructor to instantiate the Apollo Client
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newbuild" element={<NewBuild />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
