export const FailStatus = () => {
    return (
        <span className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded-lg">
        Gagal
        </span>
    )
}

export const SuccessStatus = () => {
    return (
        <span className="bg-green-100 text-green-500 text-sm px-3 py-1 rounded-lg">
        Berhasil
        </span>
    )
}

export const PendingStatus = () => {
    return (
        <span className="bg-yellow-100 text-yellow-500 text-sm px-3 py-1 rounded-lg">
        Belum Bayar
        </span>
    )
}

export const StatusDisplay = (props) => {
    const {status} = props;
    return (
        <>
            {status === "pending" && (<PendingStatus />)}
            {status == "cancelled" && (<FailStatus />)}
            {status == "success" && (<SuccessStatus />)}
        </>
    )
}