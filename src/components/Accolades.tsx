function Accolades() {
  return (
    <div className="p-5" id="accolades">
      <h2 className="p-1">Accolades</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">
              Oracle Cyberplex Platform
            </div>
            <a
              href="src/assets/redacted_applause.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white card-body"
            >
              <div className="d-flex justify-content-center">
                <div className="card-text fst-italic">
                  Thank you for your contributions on migrating OSCAR to Cloud
                  Platform - CyberPlex. This is going to be a one-stop shop
                  for all Cyber Tools and Accelerators for Oracle
                  practitioners and your efforts to ensure a successful
                  go-live is greatly appreciated!
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">Project Gemstone</div>
            <a
              href="src/assets/redacted_OPA_1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white card-body"
            >
              <div className="d-flex justify-content-center">
                <div className="card-text fst-italic">
                  Vaibhav is an excellent resource and very proactive. His zest and urge to learn is remarkable and he is key to keeping the Giant Eagle Project running smoothly.
                  He has put in a lot of hard work into this client and has independently handled client conversations taking into consideration that he is only a couple of months old in the firm.
                  His focus and determination in going the extra mile is truly commendable.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Accolades;
