import React, { ReactNode, useState } from "react"
import { Box, useColorModeValue, useToken } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import * as utils from "../utils/isMobile"

export interface IProps {
  content: ReactNode
  children?: React.ReactNode
}

// TODO add `position` prop
const Tooltip: React.FC<IProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const isMobile = utils.isMobile()
  const shadow = useColorModeValue("tableBox.light", "tableBox.dark")
  const borderColor = useToken("colors", "primary.lowContrast")

  return (
    <>
      {isVisible && isMobile && (
        // Invisible full screen div "below" the clickable link
        // Added so clicking away anywhere will hide Tooltip
        <Box
          position="fixed"
          top={0}
          left={0}
          w="full"
          h="full"
          zIndex={1}
          onClick={() => setIsVisible(false)}
        />
      )}
      <Box
        position="relative"
        display="inline-flex"
        userSelect="none"
        cursor="pointer"
        onMouseEnter={!isMobile ? () => setIsVisible(true) : undefined}
        onMouseLeave={!isMobile ? () => setIsVisible(false) : undefined}
        onClick={isMobile ? () => setIsVisible(!isVisible) : undefined}
      >
        {children}
        {isVisible && (
          <AnimatePresence>
            <Box
              as={motion.div}
              whiteSpace="normal"
              w={{ base: "140px", md: "300px" }}
              color="text"
              bg="background.highlight"
              boxShadow={shadow}
              position="absolute"
              zIndex="docked"
              p={4}
              textTransform="none"
              fontSize="sm"
              fontWeight="medium"
              cursor="default"
              borderRadius="base"
              border={`1px solid ${borderColor}`}
              bottom="125%"
              left={{ base: "-70px", md: "-150px" }}
              marginLeft="50%"
              initial="exit"
              animate="enter"
              exit="exit"
              variants={{
                exit: {
                  scale: 0.85,
                  opacity: 0,
                  transition: {
                    opacity: { duration: 0.15, easings: "easeInOut" },
                    scale: { duration: 0.2, easings: "easeInOut" },
                  },
                },
                enter: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    opacity: { easings: "easeOut", duration: 0.5 },
                    scale: { duration: 0.5, ease: [0.175, 0.885, 0.4, 1.1] },
                  },
                },
              }}
            >
              {/* This box is used as an area to keep the tooltip open when transitioning from the children content into the tooltip box content */}
              <Box
                as="span"
                position="absolute"
                bg="transparent"
                bottom={-2}
                left={0}
                width="100%"
                height={5}
              />
              <Box
                as="span"
                position="absolute"
                bottom={-2}
                left="calc(50% - 6px)"
                borderRightWidth={10}
                borderRightStyle="solid"
                borderRightColor="transparent"
                borderTopWidth={10}
                borderTopStyle="solid"
                borderTopColor="background.highlight"
                borderLeftWidth={10}
                borderLeftStyle="solid"
                borderLeftColor="transparent"
              />
              {content}
            </Box>
          </AnimatePresence>
        )}
      </Box>
    </>
  )
}

export default Tooltip
