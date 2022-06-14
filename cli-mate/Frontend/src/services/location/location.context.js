import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (fromKeyword, toKeyword) => {
    setIsLoading(true);
    // setKeyword(searchKeyword);
    locationRequest(fromKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setStartLocation(result);
        console.log("start ", startLocation);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });

    locationRequest(toKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setEndLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  // useEffect(() => {
  //   onSearch();
  // }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        startLocation,
        endLocation,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
