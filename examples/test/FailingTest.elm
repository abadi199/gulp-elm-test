port module Main exposing (main)

import String
import Test exposing (Test, test, describe)
import Expect
import Test.Runner.Node exposing (run)
import Json.Encode exposing (Value)


tests : Test
tests =
    describe "A Test Suite"
        [ test "Addition" <| \() -> 3 + 7 |> Expect.equal 10
        , test "String.left" <| \() -> String.left 1 "abcdefg" |> Expect.equal "a"
        , test "This test should fail" <| \() -> True |> Expect.equal False
        ]


main : Program Value
main =
    run emit tests


port emit : ( String, Value ) -> Cmd msg
