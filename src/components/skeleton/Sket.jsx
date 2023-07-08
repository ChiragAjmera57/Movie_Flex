import React from 'react'
import { Box, Skeleton, SkeletonText, Stack} from '@chakra-ui/react'
export default function Sket() {
  return (
    <div>
        <Stack w="216px" spacing="0" mb="19px"  >
         <Box>
         <Stack spacing="0">
              
              <Skeleton w="100%" h="230px"  speed={0.6} borderRadius="20px"  />
          </Stack>
         </Box>
         <Box w="90%" >
         <SkeletonText w="100%" ml="10px"  mt='2' noOfLines={3} spacing='2'  />
         </Box>
          
  
</Stack>
    </div>
  )
}
