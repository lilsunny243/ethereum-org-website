import { FC, useRef } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { BsTranslate } from "react-icons/bs"
import { MdBrightness2, MdWbSunny } from "react-icons/md"
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  MenuButton,
  Text,
  useDisclosure,
  useEventListener,
} from "@chakra-ui/react"

import { IconButton } from "@/components/Buttons"
import { EthHomeIcon } from "@/components/icons"
import LanguagePicker from "@/components/LanguagePicker"
import { BaseLink } from "@/components/Link"
import Search from "@/components/Search"

import Menu from "./Menu"
import MobileNavMenu from "./Mobile"
import { useNav } from "./useNav"

export interface IProps {
  path: string
}

// TODO display page title on mobile
const Nav: FC<IProps> = ({ path }) => {
  const {
    ednLinks,
    isDarkTheme,
    shouldShowSubNav,
    toggleColorMode,
    linkSections,
    mobileNavProps,
  } = useNav({ path })
  const { locale } = useRouter()
  const { t } = useTranslation("common")
  const searchModalDisclosure = useDisclosure()
  const navWrapperRef = useRef(null)
  const languagePickerState = useDisclosure()
  const languagePickerRef = useRef<HTMLButtonElement>(null)
  /**
   * Adds a keydown event listener to toggle color mode (ctrl|cmd + \)
   * or open the language picker (\).
   * @param {string} event - The keydown event.
   */
  useEventListener("keydown", (e) => {
    if (e.key !== "\\") return
    e.preventDefault()
    if (e.metaKey || e.ctrlKey) {
      toggleColorMode()
    } else {
      if (languagePickerState.isOpen) return
      languagePickerRef.current?.click()
    }
  })

  return (
    <Box position="sticky" top={0} zIndex={100} width="full">
      <Flex
        ref={navWrapperRef}
        as="nav"
        aria-label={t("nav-primary")}
        bg="background.base"
        borderBottom="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
        height="4.75rem"
        justifyContent="center"
        py={4}
        px={{ base: 4, xl: 8 }}
      >
        <Flex
          alignItems={{ base: "center", lg: "normal" }}
          justifyContent={{ base: "space-between", lg: "normal" }}
          width="full"
          maxW="container.2xl"
        >
          <BaseLink
            to="/"
            aria-label={t("home")}
            display="inline-flex"
            alignItems="center"
            textDecor="none"
          >
            <EthHomeIcon opacity={0.85} _hover={{ opacity: 1 }} />
          </BaseLink>
          {/* Desktop */}
          <Flex
            w="full"
            justifyContent={{ base: "flex-end", lg: "space-between" }}
            ms={{ base: 3, xl: 8 }}
          >
            <Menu hideBelow="lg" path={path} sections={linkSections} />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              gap={{ base: 2, xl: 4 }}
            >
              <Search {...searchModalDisclosure} />
              {/* Mobile */}
              <MobileNavMenu
                {...mobileNavProps}
                hideFrom="lg"
                toggleSearch={searchModalDisclosure.onOpen}
                drawerContainerRef={navWrapperRef}
              />
              {/* Desktop */}
              <HStack spacing={2} hideBelow="lg">
                <IconButton
                  transition="transform 0.5s, color 0.2s"
                  icon={isDarkTheme ? <MdWbSunny /> : <MdBrightness2 />}
                  aria-label={
                    isDarkTheme
                      ? "Switch to Light Theme"
                      : "Switch to Dark Theme"
                  }
                  variant="ghost"
                  isSecondary
                  px={1.5}
                  _hover={{
                    transform: "rotate(10deg)",
                    color: "primary.hover",
                  }}
                  onClick={toggleColorMode}
                />

                {/* Locale-picker menu */}
                <LanguagePicker
                  placement="bottom-end"
                  minH="unset"
                  maxH="75vh"
                  w="xs"
                  inset="unset"
                  top="unset"
                  menuState={languagePickerState}
                >
                  <MenuButton
                    as={Button}
                    ref={languagePickerRef}
                    variant="ghost"
                    color="body.base"
                    transition="color 0.2s"
                    _hover={{
                      color: "primary.hover",
                      "& svg": {
                        transform: "rotate(10deg)",
                        transition: "transform 0.5s",
                      },
                    }}
                    _active={{
                      color: "primary.hover",
                      bg: "primary.lowContrast",
                    }}
                    sx={{
                      "& svg": {
                        transform: "rotate(0deg)",
                        transition: "transform 0.5s",
                      },
                    }}
                  >
                    <Icon
                      as={BsTranslate}
                      fontSize="2xl"
                      verticalAlign="middle"
                      me={2}
                    />
                    <Text hideBelow="lg" as="span">
                      {t("common:languages")}&nbsp;
                    </Text>
                    {locale!.toUpperCase()}
                  </MenuButton>
                </LanguagePicker>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {shouldShowSubNav && (
        <Flex
          as="nav"
          aria-label={t("nav-developers")}
          display={{ base: "none", lg: "flex" }}
          bg="ednBackground"
          borderBottom="1px"
          borderColor="border"
          boxSizing="border-box"
          py={4}
          px={8}
        >
          {ednLinks.map((link, idx) => (
            <BaseLink
              key={idx}
              to={link.to}
              isPartiallyActive={link.isPartiallyActive}
              color="text"
              fontWeight="normal"
              textDecor="none"
              me={8}
              _hover={{
                color: "primary.base",
                svg: {
                  fill: "currentColor",
                },
              }}
              _visited={{}}
              sx={{
                svg: {
                  fill: "currentColor",
                },
              }}
            >
              {link.text}
            </BaseLink>
          ))}
        </Flex>
      )}
    </Box>
  )
}

export default Nav
