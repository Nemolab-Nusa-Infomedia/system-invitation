const DoaSection = ({ title, message, signers }) => (
    <div className="doa-content flex flex-col gap-3 text-center p-3 border">
        <h3 className="mb-3">{title}</h3>
        <div className="item-quotes-img mb-3 flex justify-center gap-2">
            <img
                src="/invitation-asset/undangan-v1/item-6.png"
                width="30px"
                alt=""
            />
            <img
                src="/invitation-asset/undangan-v1/item-6.png"
                width="30px"
                alt=""
            />
            <img
                src="/invitation-asset/undangan-v1/item-6.png"
                width="30px"
                alt=""
            />
        </div>
        <p>{message}</p>
        <p>[HR. Abu Daud]</p>
        <div className="ttd flex justify-around w-full text-center mx-auto">
            {signers.map((signer, index) => (
                <div key={index} className="col-6 col-md-6">
                    <p className="mb-0">Keluarga</p>
                    <p>{signer}</p>
                </div>
            ))}
        </div>
    </div>
);

export default DoaSection;
