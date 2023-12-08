import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import styles from "./layout.module.css";

import NavbarContext from "@/context/navbar-context";
import UserContext from "@/context/user-context";

export default function NavBar({ children, hasLoggedIn, initPage }) {
  const router = useRouter();
  const { currentPage, setCurrentPage } = useContext(NavbarContext);
  const { user } = useContext(UserContext);

  function handleMenuClick(page) {
    setCurrentPage(page);
    if (page === "beranda") {
      router.push("/");
      return;
    }
    router.push(`/${page}`);
  }

  function LinkNavbarItem({ children, ...props }) {
    return (
      <NavbarItem isActive={currentPage === props.currentPage} className="hover:cursor-pointer">
        <Link
          aria-current={currentPage === props.currentPage ? "page" : ""}
          color={currentPage === props.currentPage ? "secondary" : "foreground"}
          onClick={() => {
            handleMenuClick(props.currentPage);
          }}>
          {children}
        </Link>
      </NavbarItem>
    );
  }

  return (
    <div className={styles.container}>
      <Navbar isBordered className="bg-background/10">
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <LinkNavbarItem currentPage="beranda">beranda</LinkNavbarItem>
            <LinkNavbarItem currentPage="fasilitas">fasilitas</LinkNavbarItem>
            <LinkNavbarItem currentPage="tentang">tentang kami</LinkNavbarItem>
            <LinkNavbarItem currentPage="kontak">kontak</LinkNavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="search"
          />
          {hasLoggedIn ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <NavbarItem>
                <Button as={Link} color="warning" href="#" variant="flat">
                  Log In
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
}
