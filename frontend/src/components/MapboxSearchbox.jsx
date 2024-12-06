import React, { useState, useEffect } from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import { FaCoins, FaLocationArrow } from "react-icons/fa";

const MapboxSearchBox = ({ mapboxToken, onLocationSelect }) => {
  const [searchText, setSearchText] = useState(""); //store the current input text
  const [suggestions, setSuggestions] = useState([]); //store location suggestion
  const [isLoading, setIsLoading] = useState(false); //tracks loading state
  const [userLocation, setUserLocation] = useState(null); //store user's coordinates

  // Get user's location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  //fuction to search the  related location u are typing
  const searchLocation = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      // Build the endpoint URL with proximity if user location is available
      let endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json?access_token=${mapboxToken}&types=place,address&limit=5`;

      // Add proximity parameter if user location is available
      if (userLocation) {
        endpoint += `&proximity=${userLocation.longitude},${userLocation.latitude}`;
      }

      // Add country bias if needed (uncomment and modify as needed)
      //   endpoint += "&country=IN";

      const response = await fetch(endpoint);
      const data = await response.json();

      //transforming mapbox response into simpler format
      const formattedSuggestions = data.features.map((feature) => ({
        id: feature.id,
        name: feature.place_name,
        coordinates: feature.center,
        // Add distance information if user location is available
        distance: userLocation
          ? calculateDistance(
              userLocation.latitude,
              userLocation.longitude,
              feature.center[1],
              feature.center[0]
            )
          : null,
      }));

      // Sort suggestions by distance if user location is available
      if (userLocation) {
        formattedSuggestions.sort((a, b) => a.distance - b.distance);
      }

      setSuggestions(formattedSuggestions);
    } catch (error) {
      console.error("Error fetching locations:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (value) => {
    return (value * Math.PI) / 180;
  };

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchLocation(searchText);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion.name);
    setSuggestions([]);
    if (onLocationSelect) {
      onLocationSelect(suggestion);
    }
  };

  const customStyles = {
    padding: "8px 12px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    transition: "all 0.2s ease",
    backgroundColor: "#fff",
  };

  return (
    // <div className="relative w-full max-w-md">
    //   <input
    //     type="text"
    //     value={searchText}
    //     onChange={(e) => setSearchText(e.target.value)}
    //     placeholder="Search for a location..."
    //     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    //   />
    <Col xs={4}>
      <InputGroup className="mb-2">
        <InputGroup.Text>
          <FaLocationArrow />
        </InputGroup.Text>
        <Form.Control
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Going To"
          // style={{ position: "relative" }}
        />
      </InputGroup>

      {isLoading && (
        <div className="absolute right-3 top-3">
          <div className="w-4 h-4 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                customStyles,
              }}
              className="suggestion-item"
            >
              <div style={{ margin: "5px 0px", padding: "10px 10px" }}>
                {suggestion.name}
              </div>

              {suggestion.distance && (
                <div className="text-sm text-gray-500">
                  {/* {suggestion.distance.toFixed(1)} km away */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Col>
    // </div>
  );
};

export default MapboxSearchBox;
