import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch photos from the backend API
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/photos');
        setPhotos(response.data);
      } catch (err) {
        setError('Failed to load photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) return <p>Loading photos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Photos</h2>
      <div className="photo-gallery">
        {photos.map((photo) => (
          <div key={photo.ID} className="photo-card">
            <img src={photo.PhotoURL} alt="User photo" />
            <p><strong>Photo ID:</strong> {photo.ID}</p>
            <p><strong>Uploaded by User:</strong> {photo.UserID}</p>
            <p><strong>Created At:</strong> {new Date(photo.CreatedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
