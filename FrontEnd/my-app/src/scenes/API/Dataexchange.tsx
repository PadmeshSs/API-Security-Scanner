import type { Scansend, ScanResponse } from "../Types/Globaltypes";

const baseurl = 'http://127.0.0.1:8000' as const;

export async function Getdata(head: Scansend): Promise<ScanResponse>{
    const res = await fetch(`${baseurl}/scan`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(head)
    });
    if (!res.ok) {
        throw new Error("Scan failed")
    }

    return res.json();
}