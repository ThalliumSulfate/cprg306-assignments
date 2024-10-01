import Link from "next/link";
export default function Page() {
    return (
        <main className="bg-amber-100 h-dvh p-2.5">
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
                <li>
                    <Link href='week-4'>week - 4</Link>
                </li>
            </ul>
        </main>
    )
}
