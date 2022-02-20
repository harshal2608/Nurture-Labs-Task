import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { CurrencyDollarIcon } from "@heroicons/react/outline";
import { CurrencyDollarIcon as CurrencyDollarIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section4({ active = false }: { active: boolean }) {
  return (
    <Link href="/section4" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <CurrencyDollarIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <CurrencyDollarIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 4</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 4</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section4;
