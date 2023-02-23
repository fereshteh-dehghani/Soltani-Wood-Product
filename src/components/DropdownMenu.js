import { Dropdown } from "@nextui-org/react";



export default function DropdownMenu(items, children, isFlat,styles) {
  return (
    <Dropdown>
      <Dropdown.Button flat={isFlat} css={styles} color="secondary">
        {children}
      </Dropdown.Button>
      <Dropdown.Menu color="secondary" aria-label="Actions">
        {
          items?.map((item) => {
            return (
              <Dropdown.Item
                key={item.label}
                onClick={item.clickHandler}
              >
               {item.label}
              </Dropdown.Item>
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}
