import ItemList from './item-list';

export default function Page() {
    return (
        <main className="bg-amber-100 h-dvh">
            <h1 className="text-3xl pl-5 pb-5 pt-3">Shopping List</h1>
            <ItemList />
        </main>
    )
}
