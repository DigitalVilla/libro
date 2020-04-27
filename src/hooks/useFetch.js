
import React, { useState, useEffect } from 'react';

export default function useFetch (url) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log('loading');
  
      setLoading(true);
      setError(null);
      setResponse(null);
  
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setResponse(json);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, [url]);
  
    return [response, loading, error];
  };