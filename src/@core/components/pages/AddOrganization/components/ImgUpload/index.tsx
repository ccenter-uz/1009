import React, { ChangeEvent, FC, useState } from 'react'
import { Box, Button, Divider, Image, Input, SimpleGrid, Text, useToast } from '@chakra-ui/react'

interface ImageUploadState {
  images: string[]
}

const ImageUpload: React.FC = () => {
  const [state, setState] = useState<ImageUploadState>({ images: [] })
  const toast = useToast()

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (state.images.length >= 4) {
      toast({
        title: 'Достигнут предел',
        description: 'Вы можете загрузить не более 4 изображений.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })

      return
    }

    const file = e.target.files ? e.target.files[0] : null

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setState(prevState => ({
          ...prevState,
          images: [...prevState.images, reader.result as string]
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Box width='50%'>
      <Text fontWeight='500' mb={3}>
        Загрузите фото вашей организации
      </Text>
      <Input type='file' accept='image/*' onChange={handleImageChange} hidden id='file-upload' />
      <Button as='label' htmlFor='file-upload' cursor='pointer' mb='4'>
        <Image src='/add.svg' alt='add icon' />
      </Button>
      <Box display='flex' gap={1}>
        {state.images.map((image, index) => (
          <Image key={index} src={image} alt={`Preview ${index + 1}`} boxSize='150px' objectFit='cover' rounded='md' />
        ))}
      </Box>
    </Box>
  )
}

export default ImageUpload
