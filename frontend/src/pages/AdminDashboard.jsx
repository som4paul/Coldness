import { useEffect } from 'react';

export default function AdminDashboard() {
  useEffect(() => {
    if (window.cloudinary) {
      window.cloudinary.createUploadWidget(
        {
          cloudName: 'demo',
          uploadPreset: 'preset',
        },
        (error, result) => {
          console.log(result, error);
        }
      ).open();
    }
  }, []);

  return <div className="p-4">Admin Dashboard</div>;
}
