/* Kotlin doesn't require classes
 * Classes are used as blueprints for objects
 * Classes are created for the JVM bytecode (?)
 */

/* Simple Functions 
 * 
 * fun doSomething() = someObject.getSomeData()
 * fun doSomething(): SomeData {
 * 	return someObject.getSomeData()
 * }
 */
fun start(): String = "OK"

/* named arguments */
fun joinOptions(options: Collection<String>) = 
	options.joinToString(prefix="[", postfix="]")

/* Default Arguments */
fun foo(name: String = "", number: Int = 42, toUpperCase: Boolean = false) =
        (if (toUpperCase) name.uppercase() else name) + number

fun useFoo() = listOf(
        foo("a"),
        foo("b", number = 1),
        foo("c", toUpperCase = true),
        foo(name = "d", number = 2, toUpperCase = true)
)

/* Triple Quoted Strings */
const val question = "life, universe, everything"
const val answer = 42

val tripleQuotedString = """
	#question = "$question"
	#answer = $answer""".trimIndent()

/* String Templates */
val month = "(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)"

fun main(args: Array<String>) {
	println(start());
	println(joinOptions(listOf("test","1","2")))
	println(useFoo());
	println(tripleQuotedString)
}



