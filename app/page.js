import Link from "next/link";
export default function Page() {
    return (
        <main style={{ padding: "10px" }}>
            <h1>
                CPRG 306: Web Development 2 - Assignments
            </h1>
            <ul>
                <li>
                    <Link href='week-2'>week - 2</Link>
                </li>
                <li>
                    <Link href='week-3'>week - 3</Link>
                </li>
            </ul>
        </main>
    )
}
