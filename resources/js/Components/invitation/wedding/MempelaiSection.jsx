const MempelaiSection = ({ groom, bride }) => (
    <div className="mempelai-content text-center p-3 border">
        <h5 className="mb-3">بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</h5>
        <i>Assalamu'alaikum Warahmatullahi Wabarakatuh</i>
        <p className="mt-4 mb-4">
            Maha suci Allah SWT, yang telah menciptakan makhluk-Nya
            berpasang-pasangan, Ya Allah, dengan kerendahan hati, perkenankanlah
            kami menikahkan putri-putri kami:
        </p>
        <div className="nama-mempelai">
            <h3>{groom.name}</h3>
            <p>Putra dari {groom.parents}</p>
        </div>
        <span>dengan</span>
        <div className="nama-mempelai">
            <h3>{bride.name}</h3>
            <p>Putri dari {bride.parents}</p>
        </div>
    </div>
);

export default MempelaiSection;
