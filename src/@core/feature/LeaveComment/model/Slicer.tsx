import { create } from 'zustand'

const CommentSlicer = create(set => ({
  commentData: null,
  setCommentData: (commentData: any) => set({ commentData })
}))

export const useCommentSlicer = () => {
  const { commentData, setCommentData } = CommentSlicer((state: any) => state)

  return { commentData, setCommentData }
}
