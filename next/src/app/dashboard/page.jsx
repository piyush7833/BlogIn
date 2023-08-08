"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
export const metadata = {
  title: 'BlogIn | Dashboard',
  description: 'This is th description',
}
//fetching data in client side
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Dashboard = () => {

  /*
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const [err, isErr] = useState(false);
  useEffect(() => {
    const getData = async () => {
      isLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts',
        { cache: 'no-store' } //it never stores data //and revalidate in every reload
      )
      if (!res.ok) {
        throw new Error('Failed to fetch data');
        isErr(true);
      }
      const data = await res.json();
      setData(data);
      isLoading(false);
    }
    getData()
  }, [])
  console.log(data)

  */

  // we will not use useEffect from now as next swr gives us isErr and isLoading function by default but useEffect not provide the same
  const router = useRouter()
  const session = useSession();
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?userName=${session?.data?.user.name}`,
    fetcher
  );

  if (data) console.log(data);

 const handleDelete=async (id)=>{
    try {
      await fetch(`/api/posts/${id}`,{
        method:"DELETE",

      })
      mutate()
    } catch (error) {
      throw new Error(error.message)
    }
 }

 const handleSubmit=async(e)=>{
  e.preventDefault();
  const title=e.target[0].value;
  const desc=e.target[1].value;
  const img=e.target[2].value;
  const content=e.target[3].value;
  try {
    await fetch("/api/posts",{
      method:"POST",
      body:JSON.stringify({
        title,
        desc,
        img,
        content,
        userName:session.data.user.name  
      })
    })
    mutate()  //it is used to revalidate our data so that new data will be shown
    e.target.reset();
  } catch (error) {
    throw new Error(error.message);
  }
 }


  if (session.status === "loading") {
    return (<p>Loading....</p>)
  }


  else if (session.status === "authenticated") {
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
      <div className={styles.container}>
        <div className={styles.posts}>

          {isLoading
            ? "loading"
            : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt="" width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    );
  }

  else if (session.status === "unauthenticated") {
  router.push('/dashboard/login')
}
}

export default Dashboard
