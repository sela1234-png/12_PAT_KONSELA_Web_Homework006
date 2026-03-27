import {
    BellDot,
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    ShoppingCart,
    UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuIcons() {
    return (

        <div className="w-full h-20 bg-white flex  gap-3 justify-end shadow-md pr-4">
            <div className=" h-full flex gap-3 items-center ">
                <BellDot />
                <ShoppingCart />
            </div>

            <div className=" h-full rounded-full flex  gap-2 items-center">
                <DropdownMenu>

                    <DropdownMenuTrigger asChild>

                        <Button variant="">
                            <img className="w-10 h-10 rounded-full mr-2" src="/img/cat_pf.jpg" />

                            <div >
                                <h1 className="font-bold  capitalize ">Admin User</h1>
                                <p className="text-gray-400 uppercase  text-left text-[12px] ">kshrd</p>
                            </div>

                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <div>
                                <h1 className="font-bold text-gray-400 capitalize">admin user</h1>
                                <p className="text-gray-300 text-[12px]">admin@hrdshop.com</p>
                                <hr className="mt-2" />
                            </div>




                        </DropdownMenuItem>
                        <DropdownMenuItem> <UserIcon /> My Profilw</DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCardIcon />
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <SettingsIcon />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>

                </DropdownMenu>



            </div>
        </div>
    )
}
