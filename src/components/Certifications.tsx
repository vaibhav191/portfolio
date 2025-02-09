import { useEffect } from 'react';

function Certifications() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="p-5" id="certifications">
      <h2 className="p-1">Certifications</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">AWS Certified Cloud Practitioner</div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="275324b1-b3fc-4bf3-adf2-245991c8b9a4" data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">Microsoft Certified: Azure AI Fundamentals</div>
            <div className="card-body">
              <a href="https://learn.microsoft.com/api/credentials/share/en-us/VaibhavAjitkumarShrivastav-8913/158A140AF56D6A34?sharingId=8AEEAFDAB6E056D1">
                <div className="d-flex justify-content-center">
                  <img 
                    src="src/assets/microsoft-certified-fundamentals-badge.svg" 
                    alt="Microsoft Certified: Azure AI Fundamentals" 
                    width="150"
                    height="245"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">CompTIA Security+ ce Certification</div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="012edf13-bce8-4b2f-a98f-adce081e3e3e" data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">Certified in Cybersecurity (CC)</div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8b2cd92b-afac-4e88-be38-a890e4dfa0b6" data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
