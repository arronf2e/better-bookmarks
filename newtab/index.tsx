import { Storage } from "@plasmohq/storage"
import { useEffect, useState } from 'react'
 
const storage = new Storage({
  area: "local"
})

function IndexNewPage() {

  const [user, setUser] = useState()

  const getData = async () => {
    const data = await storage.get("user")
    console.log(data)
    setUser(data)
  }

  useEffect(() => {
    getData();

    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      // 遍历书签树的节点
      bookmarkTreeNodes.forEach(function(node) {
        // 判断节点是否是书签栏
        if (node.id === '1') {
          // 遍历书签栏的子项
          node.children.forEach(function(bookmark) {
            console.log(bookmark.title, bookmark.url);
          });
        }
      });
    });
  }, [])

  return <main>{user?.user_metadata?.name}</main>
}

export default IndexNewPage
