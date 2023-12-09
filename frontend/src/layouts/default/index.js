import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useContext, useEffect } from "react";
import UserContext from "@/context/user-context";
import { getProfile } from "@/services/apiService";

export default function DefaultLayout({ children, initPage }) {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const currentPage = router.query.slug || initPage;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "undefined") {
      getProfile(token)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [router.asPath]);

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  function LinkNavbarItem({ children, ...props }) {
    return (
      <NavbarItem isActive={currentPage === props.id}>
        <Link
          aria-current={currentPage === props.id ? "page" : ""}
          color={currentPage === props.id ? "secondary" : "foreground"}
          href={`/${props.slug}`}
          key={props.slug}
          id={props.id || props.slug}
          as={NextLink}>
          {children}
        </Link>
      </NavbarItem>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isBordered className="bg-background/10">
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Link
              className="hidden sm:block font-bold text-inherit"
              href="/"
              aria-label="CoSpace"
              as={NextLink}>
              CoSpace
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <LinkNavbarItem id="beranda" slug="">
              beranda
            </LinkNavbarItem>
            <LinkNavbarItem id="fasilitas" slug="fasilitas">
              fasilitas
            </LinkNavbarItem>
            <LinkNavbarItem id="tentang" slug="tentang">
              tentang kami
            </LinkNavbarItem>
            <LinkNavbarItem id="kontak" slug="kontak">
              kontak
            </LinkNavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          {user ? (
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
                <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">Profile</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <NavbarItem>
                <Button
                  as={NextLink}
                  color="warning"
                  href="/login"
                  variant="flat">
                  Log In
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={NextLink}
                  color="primary"
                  href="/login"
                  variant="flat">
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
