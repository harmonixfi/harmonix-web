import apiFetchV2 from "@/lib/apiV2";
import { EarningVaultV2Response, GetVaultsV2Payload } from "@/types/home";

export const getEarningVaultsV2 = async (payload: GetVaultsV2Payload, options?: RequestInit): Promise<EarningVaultV2Response> => {

    const result = await apiFetchV2<EarningVaultV2Response>(`/vaults/?tags=${payload.tags}`, options)

    return result
}
