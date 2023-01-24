import { useRouter } from "next/router"

const DynamicPage = () =>{

    const router = useRouter()
    const newsId  = router.query.newsId

    return <h1>news page. id is - {newsId} </h1>
}

export default DynamicPage