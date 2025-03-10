import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen pb-16">
      <Card className="flex items-center justify-center px-6 py-6 w-md h-[300px]">
        <CardHeader>
          <CardTitle>Hack Cycle にログイン</CardTitle>
          {/* <CardDescription>説明欄hogehogehoge</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form
          action={async (formData) => {
            "use server";
            const address = formData.get("address") || ""
            const domain = formData.get("domain") || ""
            formData.set("email", `${address}${domain}`)
            await signIn("resend", formData);
          }}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">メールアドレス</Label>
                <div className="flex gap-1">
                  <Input 
                    id="address"
                    name="address"
                    placeholder="Your Mail Address" 
                    className="w-full"
                  />
                  <p className="flex items-center">@</p>
                  <Select name="domain">
                    <SelectTrigger className="w-[156px]">
                      <SelectValue placeholder="ドメインを選択"/>
                    </SelectTrigger>
                    <SelectContent className="w-[156px]">
                      <SelectGroup className="">
                        <SelectLabel>domain</SelectLabel>
                        <SelectItem value="@mail.kyutech.jp">mail.kyutech.jp</SelectItem>
                        <SelectItem value="@m.titech.ac.jp">m.titech.ac.jp</SelectItem>
                        <SelectItem value="@m.isct.ac.jp">m.isct.ac.jp</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <CardFooter className="flex justify-center pt-4">
              <Button type="submit" variant="default">ログイン</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
