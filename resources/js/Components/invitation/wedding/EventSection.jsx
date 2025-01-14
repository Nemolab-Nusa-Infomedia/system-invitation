const EventSection = ({ eventName, date, time, location }) => (
    <div className="acara-content text-center p-3 border">
        <i>{eventName}</i>
        <p className="tanggal-acara mb-0">{date}</p>
        <p className="jam-acara">{time}</p>
        <p>
            <b>{location.title}</b> <br /> {location.address}
        </p>
        <i>Undangan</i>
        <div className="tanggal-pernikahan flex gap-3 justify-center mt-2 mb-4">
            <span className="border-end px-2">Kamis</span>
            <span>29 Agustus</span>
            <span className="border-start px-2">2024</span>
        </div>
        <div className="flex w-full justify-center">
            <a
                href=""
                className="btn btn-lokasi flex gap-1 items-center mt-3 rounded-md p-3"
            >
                <img src="/asset-landing-page/location.svg" alt="" />
                Lihat lokasi
            </a>
        </div>
    </div>
);

export default EventSection;
