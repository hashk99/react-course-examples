import Link from "next/link"

const NewsPage = () => {
    return <>
    <h1>News page index</h1>
    <ul>
        <li><Link  href="/newsd/test1">test 1 </Link></li>
        <li><Link href="/newsd/test2">test 2</Link> </li>
    </ul>
    </>
}


export default NewsPage