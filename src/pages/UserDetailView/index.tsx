import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CContainer, CRow } from "@coreui/react";

import { User } from "../../models";

import List from "./List";
import UserDetails from "./UserDetails";
import Loading from "../../components/Loading/Loading";

import { getUserById } from "../../api/users/getUserById";
import { getFilmById } from "../../api/films/getFilmById";
import { getSpecieById } from "../../api/species/getSpecieById";
import { getStarshipById } from "../../api/starships/getStarshipById";
import { getVehicleById } from "../../api/vehicles/getVehicleById";

// Define the type of the parameters object that will be passed in the URL
export type MyParams = {
  id: string;
};

// Define the component as a function
const UserDetailView: React.FC = () => {
  // Get the ID parameter from the URL using the useParams hook
  const { id } = useParams<keyof MyParams>() as MyParams;

  // Use the useQuery hook from react-query to fetch user data
  const query = useQuery<User>([`user`, id], () => getUserById(id), { refetchOnWindowFocus: false });

  // Render the component
  return (
    // Use the CContainer component from CoreUI to create a container with padding
    <CContainer className="p-5" fluid>
      {/* Show a loading indicator if the query is still loading */}
      {query.isLoading && <Loading />}
      {/* If the data has been loaded, render the user details */}
      {query.data && (
        <Fragment>
          <UserDetails user={query.data} />
          <CRow>
            <List
              items={query.data.films}
              queryFn={getFilmById}
              queryKey="film"
              resource="films"
              title="Films"
              renderItem={(item) => <p key={item.url}>{item.title}</p>}
            />
            <List
              items={query.data.starships}
              queryFn={getStarshipById}
              queryKey="starship"
              resource="starships"
              title="Starships"
              renderItem={(item) => <p key={item.url}>{item.name}</p>}
            />
            <List
              items={query.data.vehicles}
              queryFn={getVehicleById}
              queryKey="vehicle"
              resource="vehicles"
              title="Vehicles"
              renderItem={(item) => <p key={item.url}>{item.name}</p>}
            />
            <List
              items={query.data.species}
              queryFn={getSpecieById}
              queryKey="specie"
              resource="species"
              title="Species"
              renderItem={(item) => <p key={item.url}>{item.name}</p>}
            />
          </CRow>
        </Fragment>
      )}
    </CContainer>
  );
};

// Export the component as the default export of the module
export default UserDetailView;
