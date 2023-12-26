import { useEffect } from 'react'
import { Main } from "~components/main"
import IndexOptions from '~options';

function IndexNewTab() {

  useEffect(() => {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      // 遍历书签树的节点
      console.log(bookmarkTreeNodes, 'bookmarkTreeNodes')
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
  })

  return <IndexOptions />
}

export default IndexNewTab
