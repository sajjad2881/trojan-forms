import React from "react";
import { Text, Pane, Strong, ChevronRightIcon, Heading } from 'evergreen-ui';
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div style={{padding: "2rem 1.5rem", display: "flex", flexDirection: "column"}}>
      <Heading style={{marginBottom: "20px"}} size={700}>Get started by</Heading>
      <Pane
        elevation={1}
        width="100%"
        height={120}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="2rem"
        paddingRight="1rem"
        marginBottom={8}
        onClick={() => history.push("/details")}
      >
        <Pane display="flex" flexDirection="column">
          <Strong size={500} marginBottom=".5rem">Create a new account</Strong>
          <Text size={300}>Create a new online payments account</Text>
        </Pane>
        <ChevronRightIcon size={30} color="#193A8C"/>
      </Pane>
      <Pane
        elevation={1}
        width="100%"
        height={120}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="2rem"
        paddingRight="1rem"
        marginBottom={8}
      >
        <Pane display="flex" flexDirection="column">
          <Strong size={500} marginBottom=".5rem">Connect to an existing account</Strong>
          <Text size={300}>Link your existing account by adding your API key</Text>
        </Pane>
        <ChevronRightIcon size={30} color="#193A8C"/>
      </Pane>
    </div>
  )
}

export default Home;
